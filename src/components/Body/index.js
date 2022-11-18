import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {showLeftNavbar === true ? (
            <div className="leftbar-card">
              <h1 className="leftbar-heading">Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent === true ? (
            <div className="content-card">
              <h1 className="leftbar-heading">Content</h1>
              <p className="content-p">
                Lorem ipsum dolor sit amet,consectur adipiscing elit,sed do
                aiusomod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar === true ? (
            <div className="rightbar-card">
              <h1 className="leftbar-heading">Right Navbar</h1>
              <div className="ad-div">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
