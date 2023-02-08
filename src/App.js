import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';
import Column from './components/Column/Column';


const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
      <TextInput />
      <Button />
      <Column />
    </div>
  );
};

export default App;