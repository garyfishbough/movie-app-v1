/* eslint-disable react/jsx-key */
const Results = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <h1>{result.title}</h1>
            ))}
        </div>
    );
};

export default Results;
