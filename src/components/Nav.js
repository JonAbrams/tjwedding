import React from 'react';
import LangPicker from './LangPicker';
import _ from 'lodash';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    // this.setRootLang = this.setRootLang.bind(this);
    window.addEventListener('scroll', _.throttle(this.stickIt, 10));
  }
  componentDidMount() {
    const menu = document.querySelector('.menu');
    const clonedMenu = menu.cloneNode(true);
    const header = document.querySelector('header');
    menu.classList.add('original');
    clonedMenu.classList.add('cloned');
    clonedMenu.style.display = 'none';
    header.appendChild(clonedMenu);
  }
  stickIt() {
    let orgMenuPos = document.querySelector('.menu').getBoundingClientRect();
    let orgMenuTop = orgMenuPos.top + document.body.scrollTop;
    const orgMenu = document.querySelector('.original');
    const clonedMenu2 = document.querySelector('.cloned');
    if (document.body.scrollTop >= (orgMenuTop)) {
      let orgMenuLeft = orgMenu.getBoundingClientRect().left;
      clonedMenu2.style.cssText = `position:fixed; margin: 0 auto; z-index:500; left:${orgMenuLeft}; top:0;`;
      orgMenu.style.visibility = 'hidden';
    } else {
      clonedMenu2.style.display = 'none';
      orgMenu.style.visibility = 'visible';
    }
  }
  render() {
    const data = this.props.data;
    return (
      <nav className="menu">
        <ul>
          <li><a href="#">{data.home}</a></li>
          <li><a href="#about">{data.about}</a></li>
          <li><a href="#contact">{data.contact}</a></li>
        </ul>
        <LangPicker data={data.lang} setRootLang={this.props.setRootLang} />
      </nav>
    )
  }
}

export default Nav;
