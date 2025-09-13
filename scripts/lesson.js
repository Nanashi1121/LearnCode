// Lesson page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive elements to code examples
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.classList.add('copy-button');
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent)
                .then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
        });
        
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(button);
    });
    
    // Add syntax highlighting (would need a library like Prism.js for full implementation)
});