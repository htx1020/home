const socket = io();

// 监听命令输出
socket.on('command_output', (data) => {
    console.log('Command output:', data.output);
    // 在这里显示输出到前端界面
});

// 监听命令结束
socket.on('command_end', (data) => {
    console.log('Command ended:', data);
    // 在这里显示命令结束信息到前端界面
});

// 触发后端执行命令
function runCommand(command) {
    fetch('/run_command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

// 示例：执行命令
runCommand('your-command-here');