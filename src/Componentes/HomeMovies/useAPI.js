import { useState, useEffect } from "react";

const UseAPI = () => {
  const [Animation, setAnimation] = useState([]);
  const [Adventure, setAdventure] = useState([]);
  const [Terror, setTerror] = useState([]);

  useEffect(() => {
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
      const response = await fetch(`${url}${key}&with_genres=28`);
      const { results } = await response.json();
      setAdventure(results);
    }
    action();
  }, []);

  useEffect(() => {
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
      const response = await fetch(`${url}${key}&with_genres=16`);
      const { results } = await response.json();
      setAnimation(results);
    }
    action();
  }, []);

  useEffect(() => {
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
      const response = await fetch(`${url}${key}&with_genres=27`);
      const { results } = await response.json();
      setTerror(results);
    }
    action();
  }, []);

  return { Adventure, Animation, Terror };
};

export default UseAPI;
