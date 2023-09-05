const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default valueFormatter;
