import React from 'react'
import Bottom from './utils/Bottom'

const MethodMobile = () => {
    return (
        <section data-section-name="the-MethodMobile" id="three">
            <div className="top"><div className="t1">The method</div></div>
            <div className="content">
                <div className="block">
                    <div className="col">
                        <div className="txt1">HOW THE IMAGES ARE CREATED</div>
                        <div className="txt2">The method involves taking a standard render, exported by commonly used CAD 
                        programs like Sketchup or Revit. Using these renders that are part of the Architect's design process
                        as a base insures what is created is exactly accurate to the design. These renders are then 
                        transformed into bespoke pieces of architectural art that customers form an emotional connection to.
                        To see why this is important, <em>please view the previous section</em>.
                        <br /><br />Please press play to view the artwork transformations. 
                        If you would like to view higher resolution samples including printed examples, 
                        please <a href="mailto:contact@simonbuutveld.com">contact me</a>.</div>
                    </div>
                    
                </div>
            </div>
            <Bottom text='Please scroll down to view the gallery' />
        </section>
    )
}

export default MethodMobile