import { logout, onSnapshot } from "./auth";
import { db} from "./config";
import { collection, doc, setDoc , deleteDoc} from "firebase/firestore";
  
  const saveSong = async function(){
    const songTitle = document.getElementById("title").value.trim()
    const songArtist = document.getElementById("artist").value.trim()
    const songYear = parseInt(document.getElementById("year").value)
    const songRating = parseInt(document.getElementById("rating").value)
  
    try{
      const songRef = doc(db,"Songs",songTitle.toLowerCase())
  
      await setDoc(songRef, {
        Title: songTitle,
        Artist: songArtist,
        Year: songYear,
        Rating: songRating
      })
      alert("Song Saved")
      document.getElementById("title").value=""
      document.getElementById("artist").value=""
      document.getElementById("year").value=""
      document.getElementById("rating").value=""
    }catch(error){
      console.log("error saving song:",error)
    }
  }
  const saveForm = document.querySelector('#songForm')
  saveForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    saveSong()
  })


  const deleteSong = async function(){
    const songID = document.getElementById("ID").value.trim()
    try{
      await deleteDoc(doc(db,"Songs",songID))//https://firebase.google.com/docs/firestore/manage-data/delete-data
      alert("Song Deleted")
      document.getElementById("ID").value=""
    }catch(error){
      console.log("error deleting song:",error)
    }
  }
  const deleteForm = document.querySelector('#deleteForm')
  deleteForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    deleteSong()
  })

const LogoutForm = document.querySelector("#LogoutButton")
LogoutForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    logout()
})

async function displaySongs(){
    const songsCol = collection(db, "Songs")

    onSnapshot(songsCol, (snapshot)=>{
        const songs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        updateSongList(songs)
    })
}

function updateSongList(songs){
    const songElement = document.getElementById("songList")
    songElement.innerHTML = ""

    songs.forEach(song => {
        const list = document.createElement("list")
        list.innerHTML = `<!--PHP webpage-->
                            <strong>Artist:</strong> ${song.Artist} <br>
                            <strong>Title:</strong> ${song.Title} <br>
                            <strong>Year Released:</strong> ${song.Year} <br>
                            <strong>Personal Rating:</strong> ${song.Rating} <br><br>
                            `
        songElement.appendChild(list)
    })
}

displaySongs()