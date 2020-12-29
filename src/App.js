import Course from './components/Course';
// import Lesson from './components/Lesson';
import './App.css';


function App() {
  const items = [
    {
      name:'ReactJS',
      time:'30 giờ',
      free:false,
      desc:'React khó lắm bạn eiiii'
    },

    {
      name:'NodeJS',
      time:'40 giờ',
      free:true,
    },

    {
      name:'AngularJS',
      time:'50 giờ',
      free:true,
      desc:'React khó vãi các cháu ạ'
    },
  ];
  

  const elmCourses = items.map((item, index) => 
  <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
  )

  return (
    <div>
      {elmCourses}
    </div>
  );
}

export default App;
