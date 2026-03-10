import NotificationToggle from "@/components/NotificationToggle"

const NotificationPage = () => {
  return (
    <>
      <h1 className='text-2xl font-bold my-4 text-blue-400 uppercase'>Notification Toggle</h1>
      <NotificationToggle enabledColor="#008000" disabledColor="#EF5350" />
      <NotificationToggle enabledColor="#008000" disabledColor="#EEEEEE" />
    </>
  )
}

export default NotificationPage