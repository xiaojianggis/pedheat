import React from 'react'
import './Heatmetrics.css'
import Mapslider from './Mapslider/Mapslider'


function Heatmetrics() {
    return (
        <div>
            <section className="heatmetrics-container">
                <div className='heatmetrics-row'>
                    <h1>Heat metrics matter</h1>
                    <p>
                        A quantitative understanding of the heat distributions is important for monitoring vulnerability and building resilience, particularly for adaptation to climate change. There are many metrics describing the heat exposure distribution. The air temperature is one of the most widely used metrics to represent the human heat stress level and has been widely used to indicate human heat stress. However, air temperature is not equal to human heat stress. For example, a person directly exposed to sunlight gets significantly more heat exposure than staying in the shade, although the air temperature may be the same.
                    </p>
                    <p>
                        The land surface temperature (LST) derived from satellite imageries has been widely used as a proxy of the near-surface air temperature that humans exposed and employed in conjunction with other socio-economic factors to develop heat vulnerability indices. However, the satellite derived LST cannot fully represent human heat stress on the ground, since LST is not the same as ambient heat stress, which depends on temperature, humidity, and many other factors. The ground surface temperature derived from satellite imageries usually indicate the surface temperature of the ground, building roofs, and the top of tree canopies. However, nobody lives on top of tree canopies or building roofs. In addition, the remote sensing-derived LST usually have very coarse resolution. For example, the widely used LST derived from Landsat thermal imagery has a spatial resolution around 100m.
                    </p>
                    <p>
                        The mean radiant temperature (MRT) is the integrated net shortwave and longwave radiation that human body is exposed to from is the most significant meteorological input parameter for human energy balance, especially on clear and calm summer. In urban areas, solar radiation undergoes various processes including reflection, absorption, and re-reflection by vertical urban surfaces. A portion of this radiation is trapped within street canyons and re- emitted as longwave radiation. The MRT is just a better metric to indicate human heat stress level.
                    </p>

                    <p>
                        Using AI and high spatial resolution LiDAR data and multispectral aerial imageries, this project generate unprecedent 1m resolution MRT in Philadelphia. Let's see the difference of the LST and MRT.
                    </p>

                    <Mapslider />

                </div>
            </section>
        </div>
    )
}

export default Heatmetrics
