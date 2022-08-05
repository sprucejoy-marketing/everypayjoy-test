var SONOBI_PUSH_ACCOUNT_ID = "1040624865034";
self.importScripts(
  "https://sbi-push.com/sbi_service_worker_import_v1.0.4.js?accountid=" +
    SONOBI_PUSH_ACCOUNT_ID
);

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
