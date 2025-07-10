import submissionTopImg from '../../assets/submission-top.png'

export default function SubTop(){

    return(
    <div className="submission-image-container">
        <img
        src={submissionTopImg}
        alt="tree picture"
        className="submission-img"
        />

        <div className="submission-image-text">
        Get a free Estimate from our Trusted Professionals
        </div>
    </div>
    );
}