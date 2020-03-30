import React from "react"
import contactStyles from "./myForm.module.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    return (
      <div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xbjknore"
          method="POST"
        >
          <label className={contactStyles.label}>Email:</label>

          <div style={{ width: "100%" }}>
            <input className={contactStyles.rcorners2} type="email" name="email" />
          </div>

          <label  className={contactStyles.label}>Message: </label>

          <div>
            <textarea className={contactStyles.rcorners3} name="message" />
          </div>

          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <div>
              <button className={contactStyles.button}>Submit</button>{" "}
            </div>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
