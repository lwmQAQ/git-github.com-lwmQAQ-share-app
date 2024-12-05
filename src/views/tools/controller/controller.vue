<template>
    <div class="tools">
        <div class="tool" @click="settings">Settings</div>
        <div class="tool" @click="minimize">Minimize</div>
        <div class="tool" @click="close">Close</div>
        
    </div>
</template>

<script setup>
const minimize = () => {
    console.log('Minimize clicked');
};

const close = () => {
    console.log('Close clicked');
};

const settings = () => {
    console.log('Settings clicked');
};
</script>

<style scoped>
.tools {
    display: flex;
    justify-content: space-between;
    /* Distribute the items evenly */
    align-items: center;
    /* Vertically center the items */
    width: 200px;
    /* Set a fixed width or adjust as needed */
}

.tool {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.tool:hover {
    background-color: #ddd;
    /* Change color on hover */
}
</style>