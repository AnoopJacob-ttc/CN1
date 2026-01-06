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
{
        no: 8,
        name: `<strong>BASIC SUBNETTING AND HOST ASSIGNMENT</strong><br>
               <em>&emsp; - Subnet 192.168.10.0/24 into 4 equal subnets</em><br>
               <em>&emsp; - Identify for each subnet: Network, Broadcast, First & Last Usable, Valid Host Range, Prefix, and Subnet Mask</em><br>
               <em>&emsp; - Assign IPs to 8 PCs (two per subnet)</em><br>
               <em>&emsp; - Connect all PCs to a switch and verify with ping — only PCs in the same subnet should communicate</em>`
    },
{
    no: 9,
    name: `<strong>VLSM DESIGN AND IMPLEMENTATION PRACTICE (USING PKA)</strong><br>
           <em>&emsp;- Examine the Network Requirements</em><br>
           <em>&emsp;- Design the VLSM Addressing Scheme</em><br>
           <em>&emsp;- Assign IP Addresses to Devices and Verify Connectivity</em>`
},
{
    no: 10,
    name: `<strong>DESIGN AND IMPLEMENT A VLSM ADDRESSING (USING PKA)</strong><br>
           <em>&emsp;- Open the given Packet Tracer (.pka) file and complete all the configuration tasks as instructed within the activity</em>`
},
{
    no: 11,
    name: `<strong>CONNECT A ROUTER TO A LAN USING IPV4 ADDRESSING</strong><br>
           <em>&emsp;- Display Router Information</em><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Router Interfaces</em><br>
           <em>&emsp;- Verify the Configuration</em>`
},
{
    no: 12,
    name: `<strong>CONNECT A ROUTER TO A LAN USING IPV6 ADDRESSING</strong><br>
           <em>&emsp;- Display Router Information</em><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Router Interfaces</em><br>
           <em>&emsp;- Verify the Configuration</em>`
},
{
    no: 13,
    name: `<strong>EXAMINE THE ARP TABLE (USING PKA)</strong><br>
           <em>&emsp;- Examine an ARP Request</em><br>
           <em>&emsp;- Examine a Switch MAC Address Table</em><br>
           <em>&emsp;- Examine the ARP Process in Remote Communication</em>`
},
{
    no: 14,
    name: `<strong>CONFIGURE SECURE PASSWORDS, SSH, AND TELNET ON A CISCO ROUTER</strong>`
},
{
    no: 15,
    name: `<strong>CONFIGURE DHCP SERVER FOR MULTIPLE NETWORKS</strong><br>
           <em>&emsp;- Connect and set basic configs on all devices</em><br>
           <em>&emsp;- Assign different IPv4 networks to each LAN</em><br>
           <em>&emsp;- Configure Server as DHCP server for all networks</em><br>
           <em>&emsp;- Verify PCs get IPs automatically and test with ping</em>`
},
{
    no: 16,
    name: `<strong>CONNECT TWO NETWORKS USING A CISCO ROUTER (IPV4 AND IPV6)</strong><br>
           <em>&emsp;- Connect two switches to the router</em><br>
           <em>&emsp;- Connect one PC to each switch</em><br>
           <em>&emsp;- Configure basic settings on all devices</em><br>
           <em>&emsp;- Assign different IPv4 and IPv6 networks to each LAN</em><br>
           <em>&emsp;- Configure router interfaces with IPv4 and IPv6 addresses</em><br>
           <em>&emsp;- Assign IP addresses to both PCs</em><br>
           <em>&emsp;- Implement SSH on the router for secure access</em><br>
           <em>&emsp;- Test connectivity between PCs using the ping command</em><br>
           <em>&emsp;- Verify directly connected networks</em>`
},
{
    no: 17,
    name: `<strong>TROUBLESHOOT CONNECTIVITY ISSUES (USING PKA)</strong><br>
           <em>&emsp;- Open the given Packet Tracer (.pka) file and complete all the configuration tasks as instructed within the activity</em>`
},
{
    no: 18,
    name: `<strong>VLAN CONFIGURATION</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Verify the Default VLAN Configuration</em><br>
           <em>&emsp;- Configure VLANs</em><br>
           <em>&emsp;- Assign VLANs to Ports</em>`
},
{
    no: 19,
    name: `<strong>CONFIGURE TRUNKS</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure & Verify VLANs</em><br>
           <em>&emsp;- Configure Trunk</em>`
},
{
    no: 20,
    name: `<strong>CONFIGURE DTP</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure static trunking</em><br>
           <em>&emsp;- Configure and Verify DTP</em>`
},
{
    no: 21,
    name: `<strong>CONFIGURE ROUTER-ON-A-STICK INTER-VLAN IPV4 ADDRESSES</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Add VLANs to a Switch</em><br>
           <em>&emsp;- Configure Sub interfaces</em><br>
           <em>&emsp;- Test Connectivity with Inter-VLAN Routing</em>`
},
{
    no: 22,
    name: `<strong>CONFIGURE ROUTER-ON-A-STICK INTER-VLAN USING IPV6 ADDRESSES</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Add VLANs to a Switch</em><br>
           <em>&emsp;- Configure Sub interfaces</em><br>
           <em>&emsp;- Test Connectivity with Inter-VLAN Routing</em>`
},
{
    no: 23,
    name: `<strong>CONFIGURE LAYER 3 SWITCHING & INTER-VLAN ROUTING USING IPV4</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Layer 3 Switching</em><br>
           <em>&emsp;- Configure Inter-VLAN Routing using IPv4 Addresses</em>`
},
{
    no: 24,
    name: `<strong>CONFIGURE LAYER 3 SWITCHING & INTER-VLAN ROUTING USING IPV6</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Layer 3 Switching</em><br>
           <em>&emsp;- Configure Inter-VLAN Routing using IPv6 Addresses</em>`
},
{
    no: 25,
    name: `<strong>APPLY VLSM TO EFFICIENTLY USE IP ADDRESSES FOR MULTIPLE VLANS</strong><br>
           <em>&emsp;- Given the network 192.168.1.0/24, design a VLSM plan for the following requirements:</em><br>
           <em>&emsp;&emsp;VLAN 10 – 60 hosts</em><br>
           <em>&emsp;&emsp;VLAN 20 – 25 hosts</em><br>
           <em>&emsp;&emsp;VLAN 30 – 10 hosts</em><br>
           <em>&emsp;&emsp;VLAN 40 – 5 hosts</em><br>
           <em>&emsp;- Determine subnet masks and address ranges for each VLAN.</em><br>
           <em>&emsp;- Configure the addressing on a Router-on-a-Stick topology using a single router and four VLANs.</em><br>
           <em>&emsp;- Verify connectivity between all VLANs.</em>`
},
{
    no: 26,
    name: `<strong>CONFIGURE ETHERCHANNEL USING PAGP</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure an EtherChannel with Cisco PAgP</em>`
},
{
    no: 27,
    name: `<strong>CONFIGURE ETHERCHANNEL USING LACP</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure an 802.3ad LACP EtherChannel</em>`
},
{
    no: 28,
    name: `<strong>CONFIGURE STATIC ETHERCHANNEL</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure a static EtherChannel (mode on) on both switches</em>`
},
{
    no: 29,
    name: `<strong>ROUTER AS DHCP SERVER</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Create two networks using one router</em><br>
           <em>&emsp;- Set up the router as DHCP Server for both networks</em><br>
           <em>&emsp;- Ensure end devices get IP addresses automatically</em>`
},
{
    no: 30,
    name: `<strong>CONFIGURE DHCPV6</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure and verify a Stateless DHCPv6 Server</em><br>
           <em>&emsp;- Configure and verify a Stateful DHCPv6 Server</em>`
},
{
    no: 31,
    name: `<strong>SKILLS INTEGRATION CHALLENGE</strong><br>
           <em>&emsp;- Open the given Packet Tracer (.pka) file and complete all the configuration tasks as instructed within the activity</em>`
},
{
    no: 32,
    name: `<strong>HSRP CONFIGURATION</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure an HSRP active router</em><br>
           <em>&emsp;- Configure an HSRP standby router</em><br>
           <em>&emsp;- Verify HSRP operation</em>`
},
{
    no: 33,
    name: `<strong>MINI LAB PROJECT: DESIGN AND CONFIGURE YOUR OWN NETWORK TOPOLOGY WITH PROPER IPV4 AND IPV6 ADDRESSING TO IMPLEMENT THE FOLLOWING:</strong><br>
           <em>&emsp;- Basic settings on all devices</em><br>
           <em>&emsp;- SSH configuration for secure access</em><br>
           <em>&emsp;- Create Data VLANs, Native VLAN, Management VLAN, and assign unused ports to another VLAN</em><br>
           <em>&emsp;- Connect a Wireless LAN</em><br>
           <em>&emsp;- Configure EtherChannel between switches</em><br>
           <em>&emsp;- Provide IP addresses to all end devices using DHCP</em><br>
           <em>&emsp;- Implement HSRP Operation</em><br>
           <em>&emsp;- Implement Inter-VLAN routing using either Router-on-a-Stick or Layer 3 Switching</em>`
}
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