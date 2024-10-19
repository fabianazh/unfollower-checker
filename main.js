const fs = require('fs')

function readJSONFile(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(rawData)
}

// Followers
const followersData = readJSONFile('./followers_1.json')
let followers = []

followersData.forEach((entry) => {
    entry.string_list_data.forEach((follower) => {
        followers.push(follower.value)
    })
})

// Following
const followingData = readJSONFile('./following.json')
let following = []

followingData.relationships_following.forEach((entry) => {
    entry.string_list_data.forEach((followingEntry) => {
        following.push(followingEntry.value)
    })
})

let myFollowers = []

following.forEach((person) => {
    if (followers.includes(person)) {
        myFollowers.push(person)
    }
})

following.forEach((person) => {
    if (!myFollowers.includes(person)) {
        console.log('https://www.instagram.com/' + person)
    }
})
