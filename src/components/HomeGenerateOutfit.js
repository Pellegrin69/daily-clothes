import * as React from "react";
import {Card} from "react-bootstrap";
import Select from "react-select"

export const HomeGenerateOutfit = () => {
  const generateOutfit = () => {
    return (
      console.log("pull balenciaga white + jogging Jordan midnight blue + Nike Air Force Off White")
    )
  }

  const calfSelectOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    { value: 'More or less', label: 'More or less' }
  ]

  const colorsSelectOptions = [
    { value: 'Black', label: 'Black' },
    { value: 'White', label: 'White' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Green', label: 'Green' },
    { value: 'Red', label: 'Red' },
    { value: 'Blue', label: 'Blue' },
  ]

  const styleSelectOptions = [
    { value: 'SportWear', label: 'SportWear' },
    { value: 'Streetwear', label: 'Streetwear' },
    { value: 'Casual', label: 'Casual' },
    { value: 'Chic', label: 'Chic' },
    { value: 'Denim', label: 'Denim' },
    { value: 'Rock', label: 'Rock' },
    { value: 'Hipster', label: 'Hipster' },
  ]

  return (
    <>
      <h4 align="center" className="mb-4">Do you want your ULTIMATE OUTFIT ?</h4>
      <div className="container">
        <div className="card">
          <div className="row ms-2">
            <div className="col">
              <h6 className="mt-2">Answer the questions to access your ultimate outfit</h6>
              <p>
                Made it calf today ?
                <Select options={calfSelectOptions}/>
              </p>
              <p>
                What are the colors that would make you most happy today ?
                <Select options={colorsSelectOptions} isMulti closeMenuOnSelect={false}/>
              </p>

              <p>
                what style of clothing do you want to wear today ?
                <Select options={styleSelectOptions}/>
              </p>
            </div>
            <div className="col">
              <Card className="card" style={{ height: "18rem" }}>
                <button onClick={generateOutfit} style={{ height: "100%" }} className="btn btn-primary">
                  <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" fill="currentColor"
                         className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                      <path
                        d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                    </svg>
                    Generate your Ultimate Outfit
                  </h2>
                </button>
              </Card>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}