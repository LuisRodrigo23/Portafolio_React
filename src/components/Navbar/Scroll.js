// Scroll.js
export function changeHeaderColor(header) {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'black';
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}
