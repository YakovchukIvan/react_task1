import './about.css'

function About() {
    return (
        <div className='about__block'>
            <p>Quality assurance 07.04.2023</p>
            <h1>Yakovchuk Ivan</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam eveniet error aperiam repellat maxime. Aliquid corporis voluptatem laboriosam corrupti.</p>
            <div>
                <p>Progects</p>
                <ol>
                    <li><a href="https://www.google.com.ua/?hl=uk" rel="noreferrer" target='_blank'>Google</a></li>
                    <li><a href="https://www.facebook.com/" rel="noreferrer" target='_blank'>Facebook</a></li>
                    <li><a href="https://rozetka.com.ua/" rel="noreferrer" target='_blank'>Rozetka</a></li>
                </ol>
            </div>
        </div>
    )
}

export default About