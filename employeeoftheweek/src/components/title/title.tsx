import './title.scss';

export const Title = (props) => {
  return <div className="title">
    <h1 className="title__text">{props.children}</h1>
  </div>;
}