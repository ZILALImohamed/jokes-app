import React, {useEffect, useRef, useState} from 'react';
import Joke from "./joke";

const JokList = props => {
  if (!props.jokes) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>{
      props.jokes
        .map(joke => {
          return (
            <Joke
              joke={joke}
              key={joke.id}/>
          );
        })}
      <LoadingMore loadJokes={props.loadJokes}>Loading...</LoadingMore>
    </div>
  );
};

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

const LoadingMore = (props) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  if (isVisible) {
    props.loadJokes();
  }

  return <div ref={ref}>{isVisible && `Loading`}</div>
}


export default JokList;
