import React, {useEffect, useRef, useState, useMemo} from 'react'
import monitor from '../assets/images/monitor.png'

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function Contacts() {
  const ref = useRef(null);

  const isInViewport1 = useIsInViewport(ref);

  return (
    <div className='contacts' id='contacts'>
      <div className='contacts_wrapper'>
        <div className='row'>

        </div>
        <div className='row'>

        </div>
        <div className='row'>
          
        </div>
        <div className='row'>
          
        </div>
      </div>
      <div className={isInViewport1 ? 'laptop js-laptop laptop--closed' : 'laptop js-laptop'}>
        <div class="laptop-top">
          <div class="laptop__lid"></div>
          <div class="laptop__screen">
            <img src={monitor} alt="" className='laptop__top-img'/>
          </div>
        </div>
        <div ref={ref} class="laptop__base"></div>
        </div>
    </div>
  )
}

export default Contacts