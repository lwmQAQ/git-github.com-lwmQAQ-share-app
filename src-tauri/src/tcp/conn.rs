use tokio::net::TcpStream;
use tokio::io::{self, AsyncReadExt, AsyncWriteExt};
use std::time::Duration;
use tokio::task;
// TODO tcp
#[tokio::main]
async fn main() -> io::Result<()> {
    let server_address = "127.0.0.1:8080"; // 连接的服务器地址和端口
    match TcpStream::connect(server_address).await {
        Ok(mut stream) => {
            println!("Successfully connected to server at {}", server_address);

            // 启动一个任务来处理接收和发送消息
            let handle = task::spawn(async move {
                loop {
                    match receive_message(&mut stream).await {
                        Ok(response) => {
                            println!("Received response: {}", response);
                        }
                        Err(e) => {
                            eprintln!("Failed to receive message: {}", e);
                            break; // 如果接收数据失败，则退出循环
                        }
                    }

                    // 可选：设置一个超时时间，避免无限阻塞
                    let timeout = Duration::from_secs(5);
                    if let Err(e) = stream.readable().await {
                        eprintln!("Timeout or error occurred while waiting for read: {}", e);
                        break;
                    }
                }
            });

        }
        Err(e) => {
            eprintln!("Failed to connect: {}", e);
        }
    }

    Ok(())
}

// 发送消息到服务器
async fn send_message(stream: &mut TcpStream, msg: &str) -> io::Result<()> {
    stream.write_all(msg.as_bytes()).await?;
    println!("Sent message: {}", msg);
    Ok(())
}

// 接收来自服务器的消息
async fn receive_message(stream: &mut TcpStream) -> io::Result<String> {
    let mut buffer = vec![0; 512];
    let bytes_read = stream.read(&mut buffer).await?;

    if bytes_read == 0 {
        // 如果没有数据被读取，表示连接可能已经关闭
        return Err(io::Error::new(io::ErrorKind::UnexpectedEof, "Connection closed"));
    }

    let response = String::from_utf8_lossy(&buffer[..bytes_read]);
    Ok(response.to_string())
}
