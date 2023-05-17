function Profile(props){
    // here will desconstrut as to not write props.name etc all the time

    const {name, lastname} = props
    return <h1>Name: {name} {lastname} {props.children}</h1>
}

export default Profile;