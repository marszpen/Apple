import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchFrom/SearchFrom';
import List from './components/List/List';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
      <TextInput />
      <Button />
    </div>
  );
};

export default App;