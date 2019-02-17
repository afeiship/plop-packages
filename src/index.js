export default {
  has (inValue){
    return inValue.marks.some(mark => mark.type === 'bold')
  }
}
