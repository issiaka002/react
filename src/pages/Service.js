import React from 'react';
import Navigation from '../components/Navigation';
import "./Service.css"

const Service = () => {
      return (
            <div>
                  <Navigation/>
                  <h1>
                      Ajouter une technologie ...
                  </h1>
                  <div className='form'>
                        <form action='#'>
                                    <div>
                                    <label htmlFor='name'>Nom techno</label>
                                    <br></br>
                                    <input id='name'  type="text" name="name"></input>
                                    <br></br>                 

                                    </div>
                                    <div>
                                    <label htmlFor='category'>Category</label>
                                    <br></br>
                                    <select id="category" name="category" >
                                    .     <option>Selectionne la category ...</option>
                                          <option value="front">Front-end</option>
                                          <option value="back">Back-end</option>
                                          <option value="full">Full-stack</option>
                                          <option value="other">Autre</option>
                                     </select>
                                     <br></br>
                                    </div>
                                    <div>
                                    <label htmlFor='des'>Description</label>
                                    <br></br>
                                    <textarea id="des" name="description" rows="12"  cols="30"></textarea>
                                    <br></br>
                                    </div>
                                    <div>
                                                <input type="submit" name="add" value="Ajouter +"/>
                                    </div>
                        </form>
                  </div>
            </div>
      );
};

export default Service;