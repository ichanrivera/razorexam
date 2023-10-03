import React from 'react';
import logo from './logo.svg';
import './App.css';
import RazorNavBar from './components/RazorNavBar';
import PageHeader from './components/PageHeader';
import PageTabs from './components/PageTabs';
import GeneralCard from './components/GeneralCard';
import LogisticsTypeCard from './components/LogisticsTypeCard';
import ScheduleCard from './components/ScheduleCard';
import TagsCard from './components/TagsCard';
import NotesCard from './components/NotesCard';
import FilesImagesCard from './components/FilesImagesCard';
import EstimatedEquipmentCard from './components/EstimatedEquipmentCard';
import ReferencesCard from './components/ReferencesCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RazorNavBar />
        <PageHeader />
        <PageTabs />
      </header>
      <main className='App-main'>
        <GeneralCard />
        <LogisticsTypeCard />
        <ScheduleCard />
        <TagsCard />
        <NotesCard />
        <FilesImagesCard />
        <EstimatedEquipmentCard />
        <ReferencesCard />
      </main>
    </div>
  );
}

export default App;
