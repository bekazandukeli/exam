import { useState } from 'react';
import Data from './Data.json';
import Alert from 'react-bootstrap/Alert';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

function App() {
  const [search, setSearch] = useState('');
  const filteredDataData = Data.questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <FormControl
          placeholder="Question"
          aria-label="Question"
          aria-describedby="basic-addon1"
          style={styles.searchBox}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <Button variant="primary">Search</Button> */}
      </div>
      {filteredDataData.map((q) => (
        <Card style={styles.card} key={q.question}>
          <Card.Body>
            <Alert variant="dark">{q.question}</Alert>
            {q.answer && <Alert variant="success">{q.answer}</Alert>}
            {q.explanation && <Alert variant="warning">{q.explanation}</Alert>}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;

const styles = {
  container: {
    margin: '25px 25px',
  },
  searchContainer: {
    marginBottom: '40px',
    display: 'flex',
  },
  searchBox: {
    marginRight: '20px',
  },
  card: {
    marginBottom: '2rem',
    backgroundColor: '#eee',
  },
};
