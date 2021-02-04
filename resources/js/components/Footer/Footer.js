import Button from "../Button/Button";

const Footer = ({onRestore}) => {
  return (
    <footer>
      <Button onClick={() => onRestore()} text="Restore default buttons" color="steelblue" />
      <p className="text-muted" style={{marginTop: 10}}>
        Followed by&nbsp;
        <a className="text-muted" href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">Traversy Media video</a> | 2021
      </p>
    </footer>
  );
}

export default Footer;