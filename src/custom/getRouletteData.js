let rowData = [
  { option: '5', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '10', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '20', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '25', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '30', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '40', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '45', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '50', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '55', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '60', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '65', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '70', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '75', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '80', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '85', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '90', style: { backgroundColor: 'red', textColor: 'white' } },
  { option: '95', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '100', style: { backgroundColor: 'red', textColor: 'white' } }
];

export function getRouletteData() {
  const getShuffleOptions = () => {
    let options = []

    rowData.forEach((obj) => {
      options.push(obj.option)
    })

    return options.sort(() => { return .5 - Math.random(); })
  }

  const replaceOptions = (newOptions) => {
    for (let i = 0; i < rowData.length; i++) {
      rowData[i].option = newOptions[i] 
    }
  }

  const shuffleData = () => {
    replaceOptions(getShuffleOptions())

    return rowData
  }

  return shuffleData();
}