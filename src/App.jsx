import React, { useState } from 'react';
import { Sun, Wind, Zap, Battery, Home, Building2, Users } from 'lucide-react';

const RenewableEnergyDiagrams = () => {
  const [activeSystem, setActiveSystem] = useState(0);

  const systems = [
    {
      title: "Rooftop Solar PV System (5 kW) - Residential",
      diagram: (
        <svg viewBox="0 0 800 500" className="w-full h-full">
          {/* Solar Panels */}
          <rect x="50" y="50" width="150" height="100" fill="#1e40af" stroke="#1e3a8a" strokeWidth="3"/>
          <text x="125" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Solar PV Panels</text>
          <text x="125" y="115" textAnchor="middle" fill="white" fontSize="12">(5 kW)</text>
          
          {/* Arrow 1 */}
          <path d="M 200 100 L 280 100" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred)"/>
          <text x="240" y="90" textAnchor="middle" fontSize="11" fill="#dc2626">DC Power</text>
          
          {/* Charge Controller */}
          <rect x="280" y="70" width="120" height="60" fill="#059669" stroke="#047857" strokeWidth="2"/>
          <text x="340" y="95" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Charge</text>
          <text x="340" y="110" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Controller</text>
          
          {/* Arrow to Battery */}
          <path d="M 340 130 L 340 180" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred)"/>
          
          {/* Battery Storage */}
          <rect x="280" y="180" width="120" height="80" fill="#7c3aed" stroke="#6d28d9" strokeWidth="2"/>
          <text x="340" y="210" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Battery Storage</text>
          <text x="340" y="230" textAnchor="middle" fill="white" fontSize="11">(Li-ion/Lead-acid)</text>
          <text x="340" y="245" textAnchor="middle" fill="white" fontSize="11">5-10 kWh</text>
          
          {/* Arrow to Inverter */}
          <path d="M 400 220 L 480 220" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred)"/>
          
          {/* Inverter */}
          <rect x="480" y="190" width="120" height="60" fill="#ea580c" stroke="#c2410c" strokeWidth="2"/>
          <text x="540" y="215" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Inverter</text>
          <text x="540" y="230" textAnchor="middle" fill="white" fontSize="11">(DC to AC)</text>
          
          {/* Arrow to Distribution */}
          <path d="M 540 250 L 540 310" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)"/>
          <text x="560" y="285" fontSize="11" fill="#059669">AC 230V</text>
          
          {/* Distribution Panel */}
          <rect x="480" y="310" width="120" height="60" fill="#0891b2" stroke="#0e7490" strokeWidth="2"/>
          <text x="540" y="335" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Distribution</text>
          <text x="540" y="350" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Panel</text>
          
          {/* Grid Connection */}
          <rect x="650" y="310" width="100" height="60" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
          <text x="700" y="335" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Grid</text>
          <text x="700" y="350" textAnchor="middle" fill="white" fontSize="11">Connection</text>
          
          {/* Bidirectional Arrow */}
          <path d="M 600 340 L 650 340" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)"/>
          <path d="M 650 345 L 600 345" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred)"/>
          
          {/* Home Loads */}
          <rect x="480" y="400" width="120" height="60" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
          <text x="540" y="425" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Home Loads</text>
          <text x="540" y="440" textAnchor="middle" fill="white" fontSize="11">(Appliances)</text>
          
          {/* Arrow from distribution to loads */}
          <path d="M 540 370 L 540 400" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)"/>
          
          {/* Arrow definitions */}
          <defs>
            <marker id="arrowred" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
            </marker>
            <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      ),
      explanation: `This residential rooftop solar system harnesses sunlight through photovoltaic panels mounted on the house roof. The panels convert solar radiation into direct current electricity through the photoelectric effect occurring in semiconductor materials. The charge controller regulates voltage and current flow to prevent battery overcharging and deep discharge, thus extending battery lifespan. The battery bank stores excess energy generated during peak sunlight hours for use during nighttime or cloudy periods, ensuring continuous power availability.

The inverter performs critical conversion from DC to AC electricity at standard household voltage levels, making it compatible with home appliances. The distribution panel acts as a central hub, directing power to various household circuits. Grid connection enables bidirectional energy flow - surplus energy can be exported to the utility grid through net metering arrangements, while grid power supplements the system during high demand periods or insufficient solar generation.

This configuration provides energy independence, reduces electricity bills, and contributes to carbon footprint reduction. Real-world applications span residential buildings in both urban and suburban areas, particularly beneficial in regions with abundant sunlight and supportive government policies offering incentives for rooftop solar installations.`
    },
    {
      title: "Hybrid Solar-Wind System - Rural Health Clinic",
      diagram: (
        <svg viewBox="0 0 800 550" className="w-full h-full">
          {/* Solar Panels */}
          <rect x="50" y="50" width="120" height="80" fill="#1e40af" stroke="#1e3a8a" strokeWidth="3"/>
          <text x="110" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Solar PV</text>
          <text x="110" y="100" textAnchor="middle" fill="white" fontSize="11">Array (3 kW)</text>
          
          {/* Wind Turbine */}
          <rect x="50" y="180" width="120" height="80" fill="#0891b2" stroke="#0e7490" strokeWidth="3"/>
          <text x="110" y="215" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Wind Turbine</text>
          <text x="110" y="230" textAnchor="middle" fill="white" fontSize="11">(2 kW)</text>
          
          {/* Solar Arrow */}
          <path d="M 170 90 L 240 90" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred2)"/>
          <text x="205" y="80" textAnchor="middle" fontSize="10" fill="#dc2626">DC</text>
          
          {/* Wind Arrow */}
          <path d="M 170 220 L 240 220" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred2)"/>
          <text x="205" y="210" textAnchor="middle" fontSize="10" fill="#dc2626">AC/DC</text>
          
          {/* Hybrid Controller */}
          <rect x="240" y="130" width="140" height="100" fill="#059669" stroke="#047857" strokeWidth="3"/>
          <text x="310" y="165" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Hybrid Charge</text>
          <text x="310" y="182" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Controller +</text>
          <text x="310" y="199" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">MPPT</text>
          
          {/* Arrow to Battery */}
          <path d="M 380 180 L 450 180" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred2)"/>
          
          {/* Battery Bank */}
          <rect x="450" y="140" width="130" height="80" fill="#7c3aed" stroke="#6d28d9" strokeWidth="3"/>
          <text x="515" y="170" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Battery Bank</text>
          <text x="515" y="188" textAnchor="middle" fill="white" fontSize="11">(Deep Cycle)</text>
          <text x="515" y="203" textAnchor="middle" fill="white" fontSize="11">10-15 kWh</text>
          
          {/* Arrow to Inverter */}
          <path d="M 515 220 L 515 280" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrowred2)"/>
          
          {/* Inverter */}
          <rect x="450" y="280" width="130" height="70" fill="#ea580c" stroke="#c2410c" strokeWidth="3"/>
          <text x="515" y="310" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Sine Wave</text>
          <text x="515" y="327" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Inverter</text>
          
          {/* Arrow to Distribution */}
          <path d="M 515 350 L 515 400" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen2)"/>
          <text x="535" y="380" fontSize="11" fill="#059669">AC 230V</text>
          
          {/* Distribution Box */}
          <rect x="450" y="400" width="130" height="60" fill="#0891b2" stroke="#0e7490" strokeWidth="2"/>
          <text x="515" y="425" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Load Distribution</text>
          <text x="515" y="442" textAnchor="middle" fill="white" fontSize="11">Center</text>
          
          {/* Critical Loads */}
          <rect x="280" y="480" width="110" height="50" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
          <text x="335" y="502" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Critical Loads</text>
          <text x="335" y="515" textAnchor="middle" fill="white" fontSize="9">(Medical Equipment)</text>
          
          {/* Non-Critical Loads */}
          <rect x="630" y="480" width="110" height="50" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
          <text x="685" y="502" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Non-Critical</text>
          <text x="685" y="515" textAnchor="middle" fill="white" fontSize="9">(Lighting, Fans)</text>
          
          {/* Arrows to loads */}
          <path d="M 470 460 L 360 480" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen2)"/>
          <path d="M 560 460 L 670 480" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen2)"/>
          
          {/* Arrow definitions */}
          <defs>
            <marker id="arrowred2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
            </marker>
            <marker id="arrowgreen2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      ),
      explanation: `This hybrid renewable system combines complementary energy sources to ensure reliable power supply for healthcare facilities in remote locations. Solar photovoltaic arrays capture sunlight energy during daytime, while wind turbines generate electricity from wind kinetic energy, particularly effective during evenings and monsoon seasons when wind speeds increase. This combination addresses the intermittent nature of individual renewable sources, providing enhanced system reliability.

The hybrid charge controller with Maximum Power Point Tracking technology optimizes energy extraction from both sources simultaneously, managing variable input voltages and preventing conflicts between generation systems. Deep cycle batteries store combined energy output, providing backup capacity for continuous operation of life-saving medical equipment during periods of low renewable generation. The sine wave inverter produces clean AC power essential for sensitive medical devices like diagnostic equipment, ventilators, and refrigeration units for vaccine storage.

Load distribution prioritizes critical medical equipment, ensuring uninterrupted power to essential healthcare services. This system proves invaluable in rural health clinics lacking grid connectivity, enabling round-the-clock medical services. Real-world applications include primary health centers, maternity clinics, and vaccination camps in developing regions, supporting healthcare access in underserved communities while maintaining environmental sustainability.`
    },
    {
      title: "Microgrid System - Remote Community",
      diagram: (
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* Solar Farm */}
          <rect x="40" y="40" width="110" height="70" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
          <text x="95" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Solar PV Farm</text>
          <text x="95" y="85" textAnchor="middle" fill="white" fontSize="10">(50 kW)</text>
          
          {/* Wind Turbines */}
          <rect x="40" y="140" width="110" height="70" fill="#0891b2" stroke="#0e7490" strokeWidth="2"/>
          <text x="95" y="170" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Wind Farm</text>
          <text x="95" y="185" textAnchor="middle" fill="white" fontSize="10">(30 kW)</text>
          
          {/* Biomass Generator */}
          <rect x="40" y="240" width="110" height="70" fill="#16a34a" stroke="#15803d" strokeWidth="2"/>
          <text x="95" y="265" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Biomass</text>
          <text x="95" y="280" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Generator</text>
          <text x="95" y="295" textAnchor="middle" fill="white" fontSize="10">(25 kW)</text>
          
          {/* Arrows to Power Management */}
          <path d="M 150 75 L 220 150" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrowred3)"/>
          <path d="M 150 175 L 220 175" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrowred3)"/>
          <path d="M 150 275 L 220 200" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrowred3)"/>
          
          {/* Power Management System */}
          <rect x="220" y="130" width="160" height="90" fill="#059669" stroke="#047857" strokeWidth="3"/>
          <text x="300" y="160" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Microgrid Controller</text>
          <text x="300" y="177" textAnchor="middle" fill="white" fontSize="11">+ Energy Management</text>
          <text x="300" y="192" textAnchor="middle" fill="white" fontSize="11">System (EMS)</text>
          
          {/* Arrow to Storage */}
          <path d="M 300 220 L 300 290" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrowred3)"/>
          
          {/* Energy Storage */}
          <rect x="220" y="290" width="160" height="80" fill="#7c3aed" stroke="#6d28d9" strokeWidth="2"/>
          <text x="300" y="320" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Battery Energy</text>
          <text x="300" y="335" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Storage System</text>
          <text x="300" y="350" textAnchor="middle" fill="white" fontSize="10">(100-150 kWh)</text>
          
          {/* Arrow to Power Conversion */}
          <path d="M 380 330 L 450 330" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrowred3)"/>
          
          {/* Power Conversion */}
          <rect x="450" y="295" width="140" height="70" fill="#ea580c" stroke="#c2410c" strokeWidth="2"/>
          <text x="520" y="322" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Bidirectional</text>
          <text x="520" y="337" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Inverter System</text>
          
          {/* Arrow to AC Bus */}
          <path d="M 520 365 L 520 420" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowgreen3)"/>
          <text x="540" y="395" fontSize="10" fill="#059669">AC Bus</text>
          
          {/* AC Distribution Bus */}
          <rect x="440" y="420" width="160" height="60" fill="#0891b2" stroke="#0e7490" strokeWidth="3"/>
          <text x="520" y="445" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">AC Distribution</text>
          <text x="520" y="462" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Bus (400V 3-phase)</text>
          
          {/* Residential */}
          <rect x="150" y="510" width="100" height="60" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
          <text x="200" y="533" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Residential</text>
          <text x="200" y="547" textAnchor="middle" fill="white" fontSize="10">50 Homes</text>
          
          {/* Commercial */}
          <rect x="280" y="510" width="100" height="60" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
          <text x="330" y="533" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Commercial</text>
          <text x="330" y="547" textAnchor="middle" fill="white" fontSize="10">Shops/Schools</text>
          
          {/* Agricultural */}
          <rect x="410" y="510" width="100" height="60" fill="#16a34a" stroke="#15803d" strokeWidth="2"/>
          <text x="460" y="533" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Agricultural</text>
          <text x="460" y="547" textAnchor="middle" fill="white" fontSize="10">Pumps/Storage</text>
          
          {/* Community */}
          <rect x="540" y="510" width="100" height="60" fill="#d97706" stroke="#b45309" strokeWidth="2"/>
          <text x="590" y="533" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Community</text>
          <text x="590" y="547" textAnchor="middle" fill="white" fontSize="10">Water/Street Light</text>
          
          {/* Arrows to loads */}
          <path d="M 480 480 L 200 510" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowgreen3)"/>
          <path d="M 500 480 L 330 510" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowgreen3)"/>
          <path d="M 530 480 L 460 510" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowgreen3)"/>
          <path d="M 560 480 L 590 510" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowgreen3)"/>
          
          {/* Backup Diesel (Optional) */}
          <rect x="650" y="295" width="110" height="70" fill="#6b7280" stroke="#4b5563" strokeWidth="2"/>
          <text x="705" y="323" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Backup Diesel</text>
          <text x="705" y="337" textAnchor="middle" fill="white" fontSize="10">(Optional)</text>
          <text x="705" y="351" textAnchor="middle" fill="white" fontSize="10">10 kW</text>
          
          {/* Bidirectional arrow to bus */}
          <path d="M 650 330 L 600 330" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrowred3)"/>
          <path d="M 600 335 L 650 335" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowgreen3)"/>
          
          {/* Arrow definitions */}
          <defs>
            <marker id="arrowred3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
            </marker>
            <marker id="arrowgreen3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      ),
      explanation: `This integrated microgrid architecture leverages three distinct renewable energy sources to establish energy autonomy for isolated communities. Solar photovoltaic farms provide peak daytime generation, wind turbines contribute during high wind velocity periods, and biomass generators offer dispatchable baseload power using locally available agricultural residues, animal waste, or dedicated energy crops. This diversification minimizes dependency on single energy sources and enhances overall system resilience.

The microgrid controller orchestrates power flow between generation sources, storage systems, and consumption points through sophisticated algorithms. The Energy Management System continuously monitors generation patterns, load demands, and battery state-of-charge to optimize resource utilization and maintain power quality. The bidirectional inverter system facilitates seamless conversion between DC storage and AC distribution networks while enabling battery charging and discharging cycles based on system requirements.

The three-phase AC distribution bus delivers electricity across multiple voltage levels to serve diverse community needs - residential households, commercial establishments, agricultural operations, and community infrastructure including water treatment and street lighting. Battery energy storage provides critical backup capacity during low renewable generation periods. An optional diesel generator serves as emergency backup for extended low-resource conditions, though its usage remains minimal given the multi-source renewable configuration.

Real-world applications include island communities, mountain villages, mining townships, and rural settlements beyond grid extension feasibility. This approach delivers affordable, reliable, clean energy while creating local employment opportunities in system operation and biomass collection, fostering sustainable community development.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b-4 border-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-6">
          {/* Logo placeholder - you'll add the actual logo */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-2xl">SRM</span>
          </div>
          
          {/* Header Text */}
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-1">
              SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
            </h1>
            <div className="text-base md:text-lg text-slate-700 font-medium flex flex-wrap gap-4">
              <span>Name: PRAKHYA PRANUTHY SRI</span>
              <span className="text-purple-600">|</span>
              <span>Roll No: RA231102610046</span>
              <span className="text-purple-600">|</span>
              <span>Section: AB-1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Renewable Energy System Architectures
        </h2>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {systems.map((system, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSystem(idx)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeSystem === idx
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow'
              }`}
            >
              System {idx + 1}
            </button>
          ))}
        </div>

        {/* Active System Display */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center border-b-4 border-blue-500 pb-4">
            {systems[activeSystem].title}
          </h2>
          
          {/* Diagram Section */}
          <div className="mb-8 bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
            <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Zap className="text-yellow-500" />
              System Block Diagram
            </h3>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              {systems[activeSystem].diagram}
            </div>
          </div>

          {/* Explanation Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              System Explanation
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4 text-justify">
              {systems[activeSystem].explanation.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Energy Source</h4>
              <p className="text-sm text-green-700">
                {activeSystem === 0 && "Solar radiation converted via photovoltaic effect"}
                {activeSystem === 1 && "Dual-source: Solar PV + Wind kinetic energy"}
                {activeSystem === 2 && "Triple-source: Solar PV + Wind + Biomass combustion"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg border-2 border-orange-300">
              <h4 className="font-semibold text-orange-800 mb-2">Conversion Process</h4>
              <p className="text-sm text-orange-700">
                {activeSystem === 0 && "DC generation → Charge control → Battery storage → DC-AC inversion"}
                {activeSystem === 1 && "Hybrid controller → MPPT optimization → Storage → Pure sine wave conversion"}
                {activeSystem === 2 && "Smart EMS coordination → Battery buffering → Bidirectional conversion → Multi-phase distribution"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg border-2 border-purple-300">
              <h4 className="font-semibold text-purple-800 mb-2">Application</h4>
              <p className="text-sm text-purple-700">
                {activeSystem === 0 && "Urban/suburban residential buildings with grid backup"}
                {activeSystem === 1 && "Off-grid rural healthcare facilities requiring 24/7 reliability"}
                {activeSystem === 2 && "Complete community electrification in isolated regions"}
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default RenewableEnergyDiagrams;
