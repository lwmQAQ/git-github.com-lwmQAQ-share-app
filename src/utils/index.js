export function CheckEmail(email) {
    // 定义电子邮件的正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // 使用正则表达式测试输入的邮箱地址
    return emailRegex.test(email);
  }
  
