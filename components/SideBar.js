import Styles from "../styles/sideBar.module.scss";
import Image from "next/dist/client/image";
import { render } from "react-dom";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import SideBarIcon from "./SideBarIcon";
import SideBarContent from "./SideBarContent";
import gsap, { Elastic } from "gsap";
import { Transition } from 'react-transition-group';



// export interface props {
// 	open: boolean;
// }

function SideBar(props) {
  const menuRef = useRef(null); //we are setting the ref to null to create reference directly to the dom element.
  console.log(menuRef)  //{ current: null }
  const [timeline, setTimeline] = useState(gsap.timeline());
  console.log(timeline)
  // const [isOpen, setIsOpen] = useState(true);


  useEffect(() => {
    setTimeline(gsap.timeline({ reversed: true }));
  }, []);



  return (
    <Transition 
    in={props.isOpen}
    timeout={500}
    mountOnEnter
    unmountOnExit={false}
    addEndListener={(node, done) => {
      const sidebarRef = {current: node};
      if (!timeline) return;

      if (props.isOpen) {
        timeline
          .fromTo(sidebarRef.current, 0.5, {marginRight: '-30vw'}, { marginRight: 0 })
          .fromTo(
            menuRef.current.children,
            {
              scale: 0.5,
              opacity: 0,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: -0.5,
              ease: Elastic.easeInOut,
              stagger: { amount: 0.5 },
            },
          )
          .play()
          .then(done);
      } 
      else {
        timeline.reverse().then(done).then(() => timeline.clear());
      }
    }}
    >

      <div className={Styles.sideBarContainer}>
        {/* <SideBarIcon isOpen={isOpen} handleClick={toggleSidebar} /> */}
        <SideBarContent isOpen={props.isOpen} ref={menuRef}/>
      </div>

    </Transition>
  );
}

export default SideBar;
