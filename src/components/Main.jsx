import React from 'react'
import styles from '../style';
import { ResponsiveContainer,PieChart, Pie, Cell, Tooltip, Legend, Label} from 'recharts';
import LearningDis from "./LearningDis";
import Logic  from './Logic';
import Write from './Spelling';

const Main = () => {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF","#4287f5","#656b75"];
  const data = [
  {name: 'Learning Disabilities', value: 44, fill:'#57c0e8'},
  {name: 'Speech/Langugae Impairments', value: 19, fill:"#82ca9d"},
  {name: 'Mental Retardation', value: 8, fill:"#FFBB28"},
  {name: 'Emotional Disturbance', value: 7, fill:"#FF8042"},
  {name: 'Other Health Impairments',value:11, fill: "#AF19FF"},
  {name: 'Autism',value:4, fill:"#4287f5"},
  {name: 'Others',value:7, fill:"#656b75"}
];

const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

  return (
    <div>
    <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className='pt-50 grid grid-cols-2 gap-4'>
      <div className={`text-white `}>
        <p className='text-xl'>Learning disability tests are designed to help individuals identify areas where they may have difficulty learning and processing information. These tests can be incredibly helpful for both children and adults who may be struggling in school or the workplace, as they provide valuable information about areas of strength and weakness. Testing can also help identify specific learning disabilities, such as dyslexia or ADHD, which can then be addressed with targeted interventions and accommodations. If you or a loved one is struggling with learning, seeking out a learning disability test can be an important first step in getting the support and resources needed to succeed</p>
        <p className=' text-xl pt-10'>The piechart given shows the distribution of special education students by disability category suffering from disorders according to a survey conducted in 2007 on children by IDEAdata.org</p>
        </div>
        <div className='pt-10'>
        <PieChart width={760} height={560} className="text-white">
          <Pie  data={data} labelLine={false} label={renderCustomizedLabel} dataKey="value" outerRadius={200} fill="green" />
          <Legend layout="vertical" verticalAlign="top" align="right" />
        </PieChart>
        </div>

      </div>

      </section>
      <div className='text-white'>
        <h1 className='text-white text-5xl'>TESTS</h1>
        <ul className='text-xl'>
          <li><h1 className='text-xl'>Learning Test</h1><LearningDis/></li>
          <li><h1 className='text-xl'>Reading Test</h1><Logic/></li>
          <li><h1 className='text-xl'>Math and Logic Test</h1><Write/></li>
        </ul>
        

 
        
        
      </div>
      </div>
  )
}

export default Main