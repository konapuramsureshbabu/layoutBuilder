import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const oncontentClicked = () => {
        onToggleShowContent()
      }
      const onleftnavClicked = () => {
        onToggleShowLeftNavbar()
      }
      const onrightnavClicked = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="bg-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="ip-div">
            <input
              className="input"
              type="checkbox"
              checked={showContent}
              onChange={oncontentClicked}
              id="content"
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="ip-div">
            <input
              className="input"
              type="checkbox"
              checked={showLeftNavbar}
              onChange={onleftnavClicked}
              id="leftNavbar"
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="ip-div">
            <input
              className="input"
              type="checkbox"
              checked={showRightNavbar}
              onChange={onrightnavClicked}
              id="rightNavbar"
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
