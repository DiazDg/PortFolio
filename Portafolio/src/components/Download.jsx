import '../Styles/Intro.css'
export function ButtonsLinks () {
        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = '/documents/cv.pdf'; 
          link.download = 'cv.pdf'; 
          link.click(); 
        };
      
        return (
            <>
            <section className='sectionbutons'>
            <button className="buttons"  onClick={handleDownload}>CV</button>

            <a href="https://github.com/DiazDg" target="_blank">
            <button className="buttons" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.304 3.49.997.108-.774.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.312.467-2.385 1.235-3.225-.125-.303-.535-1.523.116-3.176 0 0 1.008-.323 3.302 1.23A11.52 11.52 0 0 1 12 5.965c1.02.004 2.047.138 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.653 1.653.243 2.873.118 3.176.77.84 1.234 1.913 1.234 3.225 0 4.605-2.807 5.623-5.478 5.92.43.37.814 1.1.814 2.22 0 1.605-.015 2.9-.015 3.292 0 .32.19.693.8.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z"/>
                </svg>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/david-diaz-59a643303" target="_blank">
            <button className="buttons" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zm-6.72 19.35h-3.83v-5.7c0-1.36-.48-2.29-1.68-2.29-1.83 0-2.64 1.37-2.64 2.79v5.2h-3.83v-10h3.83v1.36h.04c.54-.97 1.88-1.99 3.44-1.99 2.65 0 4.49 1.76 4.49 4.54v5.09zm-11.94-9.57c-1.24 0-2.25-1.01-2.25-2.26s1.01-2.26 2.25-2.26c1.24 0 2.25 1.01 2.25 2.26s-1.01 2.26-2.25 2.26zm1.91 9.57h-3.82v-10h3.82v10z"/>
                </svg>
            </button>
            </a>
            </section>
                 
            </>
          
        );
}



export default ButtonsLinks;