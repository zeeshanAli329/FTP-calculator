import React, { useState } from 'react';
import banner from './images/banner.jpg';
import banner2 from './images/FTP-Logo.png';
import banner3 from './images/images.jpeg';


function App() {
  const [avgPower, setAvgPower] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setgender] = useState('');
  const [ftp, setFtp] = useState(null);

  const handleCalculate = () => {
    const power = parseFloat(avgPower);
    if (!isNaN(power)) {
      const ftpValue = +(power * 0.95).toFixed(1);
      setFtp(ftpValue);
    } else {
      setFtp(null);
    }
  };

  const getZone = (min, max) => {
    return `${(ftp * min).toFixed(1)}W - ${(ftp * max).toFixed(1)}W`;
  };

  return (



    <div className="main-container">
      <div className="heading-section">

        <h1 className="logo-heading">
          <img src="/images/logo.png" className="heading-logo-img" alt="Cycle Logo" />
        </h1>
        <h1 className="cycle-mov">🚴</h1>
      </div>
      <div className="banner-section">
      </div>
      {/* <img src={banner} alt='banner' className='banner' /> */}
      <div className="contex-section">
        <div className="para-section">
          <h2 className="para-heading">Watts Per Kilogram Calculator</h2>
          <p className="para-text">This calculator is designed to help you determine your Functional Threshold Power (FTP) based on your 20-minute average power output. FTP is a key metric for cyclists and endurance athletes, representing the highest power output you can sustain for an extended period.</p>
        </div>
        <div className="input-sections">
          <h4 className="input-heading">Find Your Watts Per Kilogram</h4>
          <p className='input-text'>Enter your information to find your watts per kilogram.</p>

          <div className="input-group">
            <label className="input-label">Average Power (W):</label>
            <input
              type="number"
              className="input-1"
              placeholder="Enter 20-min average power"
              value={avgPower}
              onChange={(e) => setAvgPower(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Weight (kg):</label>
            <input
              type="number"
              className="input-2"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Gender:</label>
            <select
              className="input-3"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button className="btn" onClick={handleCalculate}>
            Calculate FTP
          </button>


        </div>
      </div>
      {ftp && (
        <div className='output-section'>
          {/* <h3 className="output-text">Your FTP: {ftp} watts/kg</h3> */}
          <h5 className=" zone-heading">Training Zones</h5>
          <ul className="list-group">
            <li className="list-group-item">Zone 1 (Recovery): &lt; {(ftp * 0.55).toFixed(1)}W</li>
            <li className="list-group-item">Zone 2 (Endurance): {getZone(0.56, 0.75)}</li>
            <li className="list-group-item">Zone 3 (Tempo): {getZone(0.76, 0.90)}</li>
            <li className="list-group-item">Zone 4 (Threshold): {getZone(0.91, 1.05)}</li>
            <li className="list-group-item">Zone 5 (VO2 Max): {getZone(1.06, 1.20)}</li>
            <li className="list-group-item">Zone 6 (Anaerobic): {getZone(1.21, 1.50)}</li>
            <li className="list-group-item">Zone 7 (Neuromuscular): &gt; {(ftp * 1.5).toFixed(1)}W</li>
          </ul>
          <h3 className="output-text">Your FTP: {ftp} watts/kg</h3>
        </div>
      )}

      <div class="stats-bar">
        <div class="stat workouts">
          <span class="highlight">30,000,000+</span>
          <span class="text">Workouts Completed</span>
        </div>

        <div class="stat rating">
          <span class="stars">★★★★★</span>
          <span class="rating-score">4.9/5.0</span>
          <span class="reviews"><strong>25k+ Reviews</strong></span>
        </div>

        <div class="stat platforms">
          <span>Available for</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" class="platform-icon" />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Windows_logo_-_2012.svg" alt="Windows" class="platform-icon" /> */}
          <span>iOS</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" class="platform-icon" />
        </div>
      </div>


      <div className='para-1-img'>
        <img src={banner3} alt='banner' className='image-with-para para-1-img-1'></img>
        <div className='para-1-img-1-1'>
          <h1 className='para-1-img-heading'>Prevent Burnout and Get Faster</h1>
          <p className='para-1-img-text'>Get early warning of burnout before it happens with smart training recommendations to get you back on track.</p>
        </div>

      </div>
      <div className='paragarph-section'>
        <div className='para-3-section'>
          <h2 className="para-3-heading">Why Use FTP?</h2>
          <p className="para-3-text">FTP is a critical metric for cyclists and endurance athletes. It helps you understand your current fitness level, set training zones, and track your progress over time. By knowing your FTP, you can tailor your training to improve your performance and achieve your cycling goals.</p>
        </div>

        <div className='para-3-section'>
          <h1 className="para-3-heading">What are Watts Per Kilogram?</h1>
          <p className='para-text-3'>Watts per kilogram or power-to-weight ratio is a measurement of your power on the bike, in relation to your body weight. It’s expressed as watts of cycling power produced per kilogram of body weight, abbreviated as W/kg. It directly affects performance, especially on long, steep climbs.

            In general, larger cyclists can put out more power than smaller ones. But power doesn’t tell the whole story because lighter athletes require less energy to overcome gravity when the road tilts upward. Power-to-weight ratio can offer a more reasonable way to compare different riders’ abilities than by looking at power alone. More importantly, it gives you a nuanced way to understand your abilities and changes in body weight in relation to performance.

            However, watts per kilogram might be less important than you might think. It’s most important as the gradient becomes steep. On flat or rolling terrain, aerodynamics and raw power play a massive role. At speed, almost 90% of your power is used to overcome wind resistance. That said, increasing your power-to-weight ratio means that you have a greater proportion of lean muscle mass and a stronger aerobic engine. Your W/kg directly influences your climbing ability and is a good metric of general cycling fitness.</p>

        </div>

        <div className='para-3-section'>
          <h1 className="para-3-heading">Watts</h1>
          <p className='para-text-3'>Watts are a measurement of power. You can think of this as a way to gauge how much work you are doing while riding a bike. In simple terms, power is equal to your torque multiplied by your cadence. Torque is the amount of force you generate, and cadence is the speed you turn the pedals.

            Metrics like heart rate and speed are subject to outside influence, while power is objective and comparable in any condition. Technically speaking, a watt is a measurement of energy transfer measured in real-time while cycling with a power meter. Most commonly, the watts in W/kg refers to your sustainable power (FTP).</p>
        </div>
        <div className='para-3-section'>
          <h1 className="para-3-heading">Kilograms</h1>
          <p className='para-text-3'>The kilogram is the other half of W/kg and is fairly straightforward. It is your body weight measured in kilograms. Our calculator will automatically convert pounds to kilograms for you.</p>
        </div>
        <div className='para-3-section'>
          <h1 className="para-3-heading">How Do I Improve My Watts Per Kilogram?</h1>
          <p className='para-text-3'>You can improve your power-to-weight ratio in two different ways—increase power or decrease weight. We recommend focusing on the power side of the equation first because aerodynamics and power are usually more important than losing weight. The best way to increase your FTP is by following a structured training plan.

            TrainerRoad has over 100 training plans to match your experience, schedule, and goals. As your aerobic energy system grows strong, so will your maximum sustainable power, and as a result, your power-to-weight ratio will improve.

            But what about losing weight? For many cyclists, weight loss happens naturally throughout a training plan. For others, losing weight requires additional strategies like maintaining a healthy diet. It’s important to note that every cyclist’s body is highly unique. Instead of solely focusing on weight, we recommend working to optimize body composition.

            Excessive weight loss can negatively affect your power-to-weight ratio by reducing muscle mass, which will decrease your power production. Our advice is to view weight loss in the context of your overall health and wellbeing. Losing weight may be a sensible way to improve your Watts/kg, depending on your body composition. However, if you are already very lean, it’s likely to be detrimental to your improvements in power and performance.</p>

        </div>

      </div>












      <div className="footer">
        <p className="footer-text">© 2025 FTP Calculator. All rights reserved.</p>
        <img src={banner2} alt='logo' className='logo' /></div>



    </div>
  );
}

export default App;
