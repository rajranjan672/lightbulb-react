import './Upload.css';

//  import DropFileInput from './components/drop-file-input/DropFileInput';
 import DropFileInput from '../components/DropFileInput';
import FormFIelds from "../components/FormFields"
function Upload() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box" style={{display: 'flex'
        }}> 
            <h2 className="header">
                Share your idea
            </h2>
            <div><FormFIelds /></div>
            
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            /> 
        </div>
    );
}

export default Upload;