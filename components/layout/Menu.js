import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { FiHome, FiFileText, FiDollarSign, FiTool, FiUser, FiUsers } from "react-icons/fi"; // Import icons

export default function Menu({ showMenu, setShowMenu, userType, router, setUserType }) {
  return (
    <AnimatePresence mode='wait'>
      {showMenu && (
        <motion.div
          className="absolute right-0 flex flex-col gap-4 p-4 bg-customLight-primary rounded-b-md shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        >
          {userType === "tenant" ? (
            <>
              <Button onClick={() => {
                router.push("/tenant/home");
                setShowMenu(false);
              }} icon={<FiHome />}>Home</Button>
              <Button onClick={() => {
                router.push("/tenant/documents");
                setShowMenu(false);
              }} icon={<FiFileText />}>Documents</Button>
              <Button onClick={() => {
                router.push("/tenant/payments");
                setShowMenu(false);
              }} icon={<FiDollarSign />}>Payments</Button>
              <Button onClick={() => {
                router.push("/tenant/maintenance");
                setShowMenu(false);
              }} icon={<FiTool />}>Maintenance</Button>
              <Button icon={<FiUser />}>Profile</Button>
              <Button onClick={() => {
                setUserType("owner");
                router.push("/owner/home");
                setShowMenu(false);
              }} icon={<FiUsers />}>View as Owner</Button>
            </>
          ) : (
              <>
                <Button onClick={() => {
                  router.push("/owner/home");
                  setShowMenu(false);
                }} icon={<FiHome />}>Home</Button>
                <Button onClick={() => {
                  router.push("/owner/properties");
                  setShowMenu(false);
                }} icon={<FiFileText />}>Properties</Button>
                <Button icon={<FiUsers />}>Tenants</Button>
                <Button onClick={() => {
                  router.push("/owner/documents");
                  setShowMenu(false);
                }} icon={<FiFileText />}>Documents</Button>
                <Button icon={<FiTool />}>Maintenance</Button>
                <Button onClick={() => {
                  setUserType("tenant");
                  router.push("/tenant/home");
                  setShowMenu(false);
                }} icon={<FiUsers />}>View as Tenant</Button>
              </>
            )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
