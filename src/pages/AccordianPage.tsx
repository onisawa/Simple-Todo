import Accordian from "@/components/Accordian"

const AccordianPage = () => {
  return (
    <>
      <h1 className='text-2xl font-bold mb-4 text-blue-400 uppercase'>Accordian</h1>
      <Accordian question="Question" answer="Answer" />
      <Accordian question="Lorem ipsum dolor sit amet, consectetur adipiscing elit." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet volutpat ultricies. In at nunc et purus egestas egestas quis non ex. Donec sit amet elit viverra, dapibus justo non, ullamcorper dolor. Sed ante dolor, tincidunt eu mauris tristique, ultricies euismod tortor. Etiam tempus ut libero a dignissim. In commodo ante at eros imperdiet, sed congue libero venenatis. Nunc lacinia facilisis ligula, ut tempus metus feugiat ut. Nulla pharetra tristique lectus, at eleifend augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nec libero dolor. Morbi iaculis, elit a dictum convallis, purus enim mattis nulla, nec pellentesque lacus nisl nec leo. Nam quis arcu libero. Pellentesque dictum, est eget sollicitudin mollis, turpis neque ornare eros, sed molestie lacus justo sit amet mi. Morbi suscipit viverra velit, in feugiat ipsum placerat in. Pellentesque viverra lacinia mauris, id interdum leo consectetur non. Sed dolor diam, faucibus a dui ac, rhoncus pellentesque enim." />
      <Accordian question="How can I contact you" answer="Email: onisawavisava@gmail.com" />
    </>
  )
}

export default AccordianPage