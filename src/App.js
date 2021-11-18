import {useEffect, useState} from "react";
import axios from 'axios'

function App() {
    const [text, setText] = useState('');
    const [paragraph, setParagraph] = useState(4);
    const [format, setFormat] = useState('text');

    function fetchText(){
        axios(`https://baconipsum.com/api/?type=all-meat&paras=${paragraph}&format=${format}`).then((response) => {
            setText(response.data)
        })
    }
    useEffect(() => {
        fetchText()
    }, [paragraph, format])
  return (
    <div className="container">
      <h2>React sample text generator app</h2>
       <hr/>
        <div className="form-container">
          <div className="form-item">
            <label>Paragraphs</label>
            <input type="number" defaultValue={4} onChange={(e) => setParagraph(e.target.value)} className="form-control" />
          </div>
          <div className="form-item">
            <label>Include HTML</label>
            <select onChange={(e) => setFormat(e.target.value)} className="form-control">
              <option selected value="text">No</option>
              <option value="html">Yes</option>
            </select>
          </div>
        </div>

        <div className="paragraph-container">
            {text && text}
        </div>
    </div>
  );
}

export default App;
