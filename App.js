import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// =================================================================================================
// Exercise 1
/* function App() {
  return (
    <View style={{marginTop: 40}}>
      <Text style={{fontSize: 24}}>RP Values</Text>
      <Text style={{color: 'green'}}>Excellence</Text>
      <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
      <Text style={{fontStyle: 'italic'}}>Integrity</Text>
      <Text style={{textAlign: 'center'}}>Teamwork</Text>
      <Text style={{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
    </View>
  );
}

export default App; */

// =================================================================================================
// Exercise 2
/* 
function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Who We Are</Text>
      <Text style={styles.box}>Our People</Text>
      <Text style={styles.box}>Our Campus</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  box: {
    marginTop: 30,
    width: 100,
    height: 100,
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
    border: '1px solid black',
    fontWeight: 'bold',
  }
});

export default App;
 */
// =================================================================================================
// Exercise 3A

/* const App = () => {
  return (
    <View style={Exe3A.parent}>
      <Text style={[Exe3A.child, {backgroundColor: "powderblue"}]}>Child One</Text>
      <Text style={[Exe3A.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
      <Text style={[Exe3A.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
    </View>
  );
} */

/* const Exe3A = StyleSheet.create({
  parent: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    justifyContent: 'space-between',
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    flex: 1,
  }
});   */

// =================================================================================================
// Exercise 3B
/* const App = () => {
  return (
    <View style={Exe3B.parent}>
      <Text style={[Exe3B.child, {backgroundColor: "powderblue"}]}>Child One</Text>
      <Text style={[Exe3B.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
      <Text style={[Exe3B.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
    </View>
  );
}

const Exe3B = StyleSheet.create({
  parent: {
    marginTop: 40,
    flexDirection: 'column',
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    flex: 1,
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    flex: 1
  }
}); */
// =================================================================================================
// Exercise 3C
/* const App = () => {
  return (
    <View style={Exe3C.parent}>
      <Text style={[Exe3C.child, {backgroundColor: "powderblue", maxWidth: 90}]}>Child One</Text>
      <Text style={[Exe3C.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
      <Text style={[Exe3C.child, {backgroundColor: "steelblue", maxHeight: 120}]}>Child Three</Text>
    </View>
  );
}

const Exe3C = StyleSheet.create({
  parent: {
    marginTop: 40,
    flexDirection: 'column',
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
    flex: 1,
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    flex: 1
  }
}); */
// =================================================================================================
// Exercise 3D
/* const App = () => {
  return (
    <View style={D.parent}>
      <Text style={[D.child, {backgroundColor: "powderblue", flex: 1}]}>Child One</Text>
      <Text style={[D.child, {backgroundColor: "skyblue", flex: 2}]}>Child Two</Text>
      <Text style={[D.child, {backgroundColor: "steelblue", flex: 3}]}>Child Three</Text>
    </View>
  );
}

const D = StyleSheet.create({
  parent: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  }
}); */
// =================================================================================================
// Exercise 3E
// const App = () => {
//   return (
//     <View style={E.parent}>
//       <Text style={[E.child, {backgroundColor: "powderblue"}]}>Child One</Text>
//       <Text style={[E.child, {backgroundColor: "skyblue",}]}>Child Two</Text>
//       <Text style={[E.child, {backgroundColor: "steelblue",}]}>Child Three</Text>
//     </View>
//   );
// }

// const E = StyleSheet.create({
//   parent: {
//     marginTop: 40,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//     /* justifyContent: 'flex-end' */
//     /* justifyContent: 'space-between', */
//     /* justifyContent: 'space-evenly', */
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });



// =================================================================================================
// Exercise 4
const App = () => {
  return (
    <View style={Exe4.parent}>
      <Text style={[Exe4.child, { backgroundColor: "lightblue" }]}>Square 1</Text>
      <Text style={[Exe4.child, { backgroundColor: "lightgreen", }]}>Square 2</Text>
      <Text style={[Exe4.child, { backgroundColor: "red", }]}>Square 3</Text>
    </View>
  );
}

const Exe4 = StyleSheet.create({
  parent: {
    backgroundColor: 'whitesmoke',
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  child: {
    width: 80,
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default App;