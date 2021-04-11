import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../style/Carousel.scss'

export default function slider() {
    const content = [
        {
            'title': 'Flicker Gallery',
            'photoURL': 'https://res.cloudinary.com/duwtajcro/image/upload/v1618059515/ikhugqb7zjq6qo8bxqvb.png',
            'description': "Front-end web application that displays an image gallery. The main functionalities are dag&drop, infinity scroll, image carousel, and change the photo gallery to black&white.",
            'gitHubURL': "https://github.com/GiorgiaBorgmann/flicker-gallery",
            'deployAppURL': "https://giorgiaborgmann.github.io/gallery-flicker/"
        },
        {
            'title': 'Pet Adoption App - Pet Adoption proposal',
            'photoURL': 'https://res.cloudinary.com/duwtajcro/image/upload/v1618059396/fkrp0b2gcmwmvmkf2b31.png',
            'description': "Full-stack web application that allows users to save and adopt pets. Implemented admin authentication, allowing admins to view signed-in users, add pets to the page, edit pets, and manage MongoDB data in a visual interface.",
            'gitHubURL': "https://github.com/GiorgiaBorgmann/pet-project",
            'deployAppURL': "https://pet-app-giorgia-borgmann.herokuapp.com/"
        },
        {
            'title': 'NASDAQ Stock search ',
            'photoURL': 'https://res.cloudinary.com/duwtajcro/image/upload/v1618065311/ao7pqqb6qngm3le29fjm.png',
            'description': "A fully functional 'Robinhood' like clone, that allows users to search and view public shares listed in the NASDAQ index. Users can view the market growth of any stock, via the user interface.",
            'gitHubURL': "https://github.com/GiorgiaBorgmann/NASDAQ-APP",
            'deployAppURL': "https://giorgiaborgmann.github.io/NASDAQ-APP/"
        },
        {
            'title': 'Twitter Clone',
            'photoURL': 'https://res.cloudinary.com/duwtajcro/image/upload/v1618064828/zfqogk0wiwarsvqhuuan.png',
            'description': "A fully functional Twitter-like clone, that allows users to create an account, write and publish tweets, edit their profile, sign in with Google, or create an account with an email.",
            'gitHubURL': "https://github.com/GiorgiaBorgmann/tweet-clone",
            'deployAppURL': "https://itc-twitter-12cb5.web.app/"
        }

    ]
    return (
        <Slider>
            {content.map((article, index) => <div key={index} className='container-carousel'>
                <img src={article.photoURL} alt='project-img' className='image-project-carousel' />
                <div className='container-text-carousel'>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <div className='btns-carousel'>
                        <a target="_blank" rel="noreferrer" href={article.gitHubURL}>GitHub repository</a>
                        <a target="_blank" rel="noreferrer" href={article.deployAppURL}>Go to App</a>
                    </div>

                </div>

            </div>)}
        </Slider>
    )
}



