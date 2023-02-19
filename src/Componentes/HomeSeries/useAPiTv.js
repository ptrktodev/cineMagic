import { useState, useEffect } from "react";

const UseAPItv = () => {
  const [Crime, setCrime] = useState([]);
  const [Comedia, setComedia] = useState([]);
  const [Drama, setDrama] = useState([]);

  useEffect(() => {
    // Comedia
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/tv?api_key=";
      const response = await fetch(`${url}${key}&with_genres=35`);
      const { results } = await response.json();
      setComedia(results);
    }
    action();
  }, []);

  useEffect(() => {
    // Crime
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/tv?api_key=";
      const response = await fetch(`${url}${key}&with_genres=80`);
      const { results } = await response.json();
      setCrime(results);
    }
    action();
  }, []);

  useEffect(() => {
    // Drama
    async function action() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/discover/tv?api_key=";
      const response = await fetch(`${url}${key}&with_genres=18`);
      const { results } = await response.json();
      setDrama(results);
    }
    action();
  }, []);

  return { Crime, Comedia, Drama };
};

export default UseAPItv;
