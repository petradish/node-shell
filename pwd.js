module.exports = () => {
  process.stdout.write(process.cwd()); //also can use __dirname
  process.stdout.write('\nprompt > ');
}
