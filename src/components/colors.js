import React from "react";
import MainPage from "./mainpage";

export default function Color() {

    return (

      <MainPage>

        <div className="color-page col-md-12 col-sm-12">

            <div className="color-title col-md-12 col-sm-12">
                <h4>Color Utilities</h4>
                <p>Bootstrap's default utility classes can be found on the official <span className="color-highlight">Bootstrap Documentation page</span>. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            </div>

            <div className="color-docs col-md-12 col-sm-12"> {/* contain 3 cards */}

                <div className="color-txt col-md-3 col-sm-12">  {/* card-1 */}
                    <div className="card">
                        <div className="card-header" style={{ color: 'blue', fontWeight: 'bold' }}>Custom Text Color Utilities</div>
                        <div className="card-body">
                            < CustomColor
                                text='.text-gray-100'
                                bg='#5a5c69'
                                txtColor='white'
                            />

                            < CustomColor
                                text='.text-gray-200'
                                bg='#5a5c69'
                                txtColor='#eaecf4'
                            />

                            < CustomColor
                                text='.text-gray-300'
                                bg='#5a5c69'
                                txtColor='#dddfeb'
                            />

                            < CustomColor
                                text='.text-gray-400'
                                bg='#5a5c69'
                                txtColor='#d1d3e2'
                            />

                            < CustomColor
                                text='.text-gray-500'
                                bg='white'
                                txtColor='#b7b9cc'
                            />

                            < CustomColor
                                text='.text-gray-600'
                                bg='white'
                                txtColor='#858796'
                            />

                            < CustomColor
                                text='.text-gray-700'
                                bg='white'
                                txtColor='#6e707e'
                            />

                            < CustomColor
                                text='.text-gray-800'
                                bg='white'
                                txtColor='#5a5c69'
                            />

                            < CustomColor
                                text='.text-gray-900'
                                bg='white'
                                txtColor='#3a3b45'
                            />
                        </div>

                    </div> {/* card close */}

                </div> {/* card-1 ending */}

                <div className="color-bg col-md-5 col-sm-12"> {/* card-2 */}
                    <div className="card">

                        <div className="card-header" style={{ color: 'blue', fontWeight: 'bold' }}>Custom Background Gradient Utilities</div>
                        <div className="card-body">
                            <div className="bg-docs bg-primary"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-secondary"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-success"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-info"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-warning"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-danger"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-light"><p className="bg-docs-txt" style={{ color: 'black' }}>.bg-gradient-primary</p></div>
                            <div className="bg-docs bg-dark"><p className="bg-docs-txt">.bg-gradient-primary</p></div>
                        </div>

                    </div>
                </div> {/* card-2 ending */}

                <div className="color-grey col-md-3 col-sm-12">  {/* card-3 */}
                    <div className="card">
                        <div className="card-header" style={{ color: 'blue', fontWeight: 'bold' }}>Custom Grayscale Background Utilities</div>
                        <div className="card-body">
                            <div className="grey-docs" style={{ backgroundColor: '#f8f9fc' }}><p style={{ color: '#858796' }}>.bg-gray-100</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#eaecf4' }}><p style={{ color: '#858796' }}>.bg-gray-200</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#dddfeb' }}><p style={{ color: '#858796' }}>.bg-gray-300</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#d1d3e2' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-400</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#b7b9cc' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-500</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#858796' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-600</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#6e707e' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-700</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#5a5c69' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-800</p></div>
                            <div className="grey-docs" style={{ backgroundColor: '#3a3b45' }}><p style={{ color: '#f8f9fc' }}>.bg-gray-900</p></div>

                        </div>
                    </div>
                </div> {/* card-3 ending */}

            </div>


        </div>
    
        </MainPage>


    );
}




function CustomColor({ text, bg, txtColor }) {
    return (
        <div style={{ backgroundColor: `${bg}` }}>
            <p className='custom-para' style={{ color: `${txtColor}`, textAlign: 'left' }}>{text}</p>
        </div>
    );
}