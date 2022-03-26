import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const videos = [
    {
        title: "De l’informatique industrielle au développement web! - GOMYCODE Gabès",
        url: "https://www.youtube.com/embed/_SePtrF9wzs"
    },
    {
        title: "Algerian Women In Tech - Ikram ZERKOUT",
        url: "https://www.youtube.com/embed/BVyr5UuVaE8"
    },
    {
        title: "Our Students Rock - Syfax ACHERFOUCHE",
        url: "https://www.youtube.com/embed/Qw-IyR69S3g"
    },
    {
        title: "Our Students Rock - Serine MEGURAD",
        url: "https://www.youtube.com/embed/5cvtBART9vs"
    }
];

function App() {
    return (
        <div >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8" style={{}}>
                        <iframe height={500} width={600} src="https://www.youtube.com/embed/gIHPRUTx0zU" frameborder="0"></iframe>
                        <h3>Du génie électrique au développement web!</h3>
                    </div>
                    <div className="col-4">
                        {videos.map((video) => (
                            <div>
                                <iframe src={video.url} frameborder="0"></iframe>
                                <p>{video.title}</p>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
