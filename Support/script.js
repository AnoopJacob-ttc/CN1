const experiments = [
    {
        no: 1,
        name: `<strong>FAMILIARIZATION OF PACKET TRACER & NAVIGATE THE IOS</strong><br>
               <em>&emsp; - Explore EXEC Modes</em><br>
               <em>&emsp; - Set the Clock</em>`
    },
    {
        no: 2,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Host Name</em><br>
               <em>&emsp; - Banner MOTD</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`
    },
{
        no: 3,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Verify the Default Switch Configuration</em><br>
               <em>&emsp; - Disable DNS lookup</em><br>
               <em>&emsp; - Configure domain name</em><br>
               <em>&emsp; - Enable Password</em><br>
               <em>&emsp; - Enable Secret</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`
    },
{
        no: 4,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Configure Line Passwords</em><br>
               <em>&emsp; - Encrypt all plain text passwords</em><br>
               <em>&emsp; - Logging synchronous</em><br>
               <em>&emsp; - Login Attempt Limitation Settings</em><br>
               <em>&emsp; - Exec timeout</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`
    },
{
        no: 5,
        name: `<strong>IMPLEMENT BASIC CONNECTIVITY</strong><br>
               <em>&emsp; - Perform Basic Configurations on a Switch</em><br>
               <em>&emsp; - Configure the PCs</em><br>
               <em>&emsp; - Configure the Switch Management Interface</em>`
    },
{
        no: 6,
        name: '<strong>CONNECT A WIRED AND WIRELESS LAN</strong>'
    },
{
        no: 7,
        name: `<strong>CONFIGURE INITIAL ROUTER SETTINGS</strong><br>
               <em>&emsp; - Verify the Default Router Configuration</em><br>
               <em>&emsp; - Configure and Verify the Initial Router Configuration</em><br>
               <em>&emsp; - Save the Running Configuration File</em>`
    },

    { no: 2, name: "Basic Configuration of Cisco Switch" }
    // Add more experiments here as needed
];

document.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.getElementById("experimentTable");
    if (!tableBody) return;

    let rows = "";

    experiments.forEach(exp => {
        rows += `
            <tr onclick="window.location.href='experiment${exp.no}.html'">
                <td>${exp.no}</td>
                <td>${exp.name}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = rows;
});