import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    borderRadius: 35,
    marginBottom: 10,
    height: '92%',
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  imagem: {
    borderRadius:35,
    opacity: 0.5,
    width: null,
    height:null,
  },
  areainfo: {
    alignItems: 'center',
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },
  areatexto:{
    width: '80%',
    maxHeight:'70%',
    paddingHorizontal:20,
  },
  nomeservico: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom:15,
  },
  descricao: {
    fontSize: 15,
    color: '#DEDFE0',
    fontWeight:'500',
    marginBottom: 10,
  },
  preco: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 1,
    color: '#fff',
    marginBottom: 20,
  },
  stars:{
      width:90,
      flexDirection:'row',
      alignItems: 'center'
  },
  pontuacao:{
    fontSize: 15,
    color: '#DEDFE0',
    fontWeight:'600',
    marginLeft:10,
  }
});
