// https://api.cloudflare.com/client/v4/accounts/{account_id}/storage/kv/namespaces
// bearer stored in .env under WORKERS_TOKEN
// account_id stored in .env under ACCOUNT_ID

// $ npx ts-node make_namespace.ts
// or
// $ bun make_namespace.ts

const account_id = process.env.ACCOUNT_ID

function createKey(namespace_id: string) {
  console.log("Creating key (donations)")
  // now check if the key 'donations' exists in the namespace
  fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/values/donations`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.WORKERS_TOKEN}`,
      },
    }
  )
    .then(async (response) => {
      console.log(response)
      const data = await response.json()

      if (data.success) {
        console.log("Key (donations) exists")

        console.log(
          `The key (donations) has the following value: ${data.result}`
        )
      } else {
        console.log("Key (donations) does not exist")
        if (data.errors[0].code !== 10000) {
          console.error(data.errors)
        }

        // create the key

        // this means we must create a new key with these default values
        /**
         * stability: 0.3,
         * development: 0.5,
         * healthcare: 0.2,
         * escape: 0.1,
         * basicNeeds: 0.1,
         * totalPeople: 0.4,
         */

        const formData = new FormData()

        formData.append("metadata", "")
        formData.append(
          "value",
          JSON.stringify({
            stability: 0.3,
            development: 0.5,
            healthcare: 0.2,
            escape: 0.1,
            basicNeeds: 0.1,
            totalPeople: 0.4,
          })
        )

        fetch(
          `https://api.cloudflare.com/client/v4/accounts/${account_id}/storage/kv/namespaces/${namespace_id}/values/donations`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${process.env.WORKERS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: formData,
          }
        )
          .then(async (response) => {
            const data = await response.json()

            if (data.success) {
              console.log("Key (donations) created")
              console.log(data)
            } else {
              console.error("Creating key (donations) failed")
              console.error(data.errors)
            }
          })
          .catch((error) => {
            console.error("Error creating key (donations)")
            console.error(error)
          })
      }
    })
    .catch((error) => {
      console.error("Error fetching key (donations)")
      console.error(error)
    })
}

fetch(
  `https://api.cloudflare.com/client/v4/accounts/${account_id}/storage/kv/namespaces`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.WORKERS_TOKEN}`,
    },
  }
)
  .then(async (response) => {
    const data = await response.json()
    if (data.success) {
      // check if the namespace exists
      const namespace = data.result.find((ns: any) => ns.title === "unitedway")
      if (namespace) {
        console.log(`Namespace (unitedway) exists: ${namespace.id}`)
        createKey(namespace.id)
      } else {
        console.log("Namespace (unitedway) does not exist")

        // make a new namespace
        fetch(
          `https://api.cloudflare.com/client/v4/accounts/${account_id}/storage/kv/namespaces`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.WORKERS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: "unitedway",
            }),
          }
        )
          .then(async (response) => {
            const data = await response.json()

            if (data.success) {
              console.log(`Namespace (unitedway) created: ${data.result.id}`)
              createKey(data.result.id)
            } else {
              console.log("Creating namespace failed")
              console.error(data.errors)
            }
          })
          .catch((error) => {
            console.error("Error creating namespace")
            console.error(error)
          })
      }
    } else {
      console.error("Fetching namespaces failed")
      console.error(data.errors)
    }
  })
  .catch((error) => {
    console.error("Error fetching namespaces")
    console.error(error)
  })
