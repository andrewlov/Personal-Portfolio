// Simple channel navigation
document.querySelectorAll('.channel').forEach(channel => {
    channel.addEventListener('click', function() {
        document.querySelectorAll('.channel').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        const channelName = this.textContent.trim().substring(1);
        document.querySelector('.content-title').textContent = channelName;

        const sectionId = channelName;
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    });
});

// Server icon selection
document.querySelectorAll('.server-icon').forEach(server => {
    server.addEventListener('click', function() {
        document.querySelectorAll('.server-icon').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});